const fs = require('fs')
const path = require('path')

async function fetchReport({ type = 'daily', start, end, host = 'http://localhost:3000' } = {}) {
  try {
    const params = new URLSearchParams()
    params.set('type', type)
    if (start) params.set('start', start)
    if (end) params.set('end', end)

    const url = `${host}/api/reports?${params.toString()}`
    console.log('Fetching report from', url)
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Server returned ${res.status} ${res.statusText}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error('Failed to fetch report:', err)
    process.exitCode = 1
    return null
  }
}

function toCsv(report) {
  const lines = []
  // Totals
  lines.push('Totals')
  lines.push(`totalOrders,${report.totals.totalOrders}`)
  lines.push(`totalSales,${report.totals.totalSales}`)
  lines.push('')

  // Top products
  lines.push('Top Products')
  lines.push('id,name,qty_sold,revenue')
  for (const p of report.topProducts || []) {
    lines.push([p.id, `"${String(p.name).replace(/"/g, '""') }"`, p.qty_sold, p.revenue].join(','))
  }
  lines.push('')

  // Breakdown
  lines.push('Breakdown')
  lines.push('date,orders_count,total_sales')
  for (const b of report.breakdown || []) {
    lines.push([b.date, b.orders_count, b.total_sales].join(','))
  }

  return lines.join('\n')
}

async function main() {
  // Minimal argv parsing without extra deps
  const raw = process.argv.slice(2)
  const argv = {}
  for (let i = 0; i < raw.length; i++) {
    const a = raw[i]
    if (a.startsWith('--')) {
      const key = a.slice(2)
      const val = raw[i + 1] && !raw[i + 1].startsWith('-') ? raw[++i] : true
      argv[key] = val
    } else if (a.startsWith('-')) {
      const key = a.slice(1)
      const val = raw[i + 1] && !raw[i + 1].startsWith('-') ? raw[++i] : true
      argv[key] = val
    }
  }

  const type = argv.type || argv.t || 'daily'
  const start = argv.start || argv.s
  const end = argv.end || argv.e
  const host = argv.host || 'http://localhost:3000'

  const report = await fetchReport({ type, start, end, host })
  if (!report) return

  const now = new Date().toISOString().replace(/[:.]/g, '-')
  const outDir = path.join(__dirname, '..', 'reports')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const base = `report-${type}-${now}`
  const jsonPath = path.join(outDir, `${base}.json`)
  const csvPath = path.join(outDir, `${base}.csv`)

  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf8')
  fs.writeFileSync(csvPath, toCsv(report), 'utf8')

  console.log('Report saved:')
  console.log(' - JSON:', jsonPath)
  console.log(' - CSV :', csvPath)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

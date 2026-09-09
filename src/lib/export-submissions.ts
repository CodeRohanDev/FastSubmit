import Papa from 'papaparse'
import { Form, Submission } from '@/types'

function toRows(submissions: Submission[]) {
  return submissions.map(s => ({
    ...s.data,
    submittedAt: s.submittedAt instanceof Date ? s.submittedAt.toISOString() : String(s.submittedAt || ''),
  }))
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function exportSubmissionsCSV(form: Form, submissions: Submission[]) {
  const csv = Papa.unparse(toRows(submissions))
  downloadBlob(new Blob([csv], { type: 'text/csv' }), `${form.name}-submissions.csv`)
}

export function exportSubmissionsJSON(form: Form, submissions: Submission[]) {
  const json = JSON.stringify(toRows(submissions), null, 2)
  downloadBlob(new Blob([json], { type: 'application/json' }), `${form.name}-submissions.json`)
}

export async function exportSubmissionsExcel(form: Form, submissions: Submission[]) {
  const XLSX = await import('xlsx')
  const rows = toRows(submissions)
  const worksheet = XLSX.utils.json_to_sheet(rows)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions')
  XLSX.writeFile(workbook, `${form.name}-submissions.xlsx`)
}

export async function exportSubmissionsPDF(form: Form, submissions: Submission[]) {
  const { jsPDF } = await import('jspdf')
  const autoTable = (await import('jspdf-autotable')).default
  const rows = toRows(submissions)

  const columns = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach(key => set.add(key))
      return set
    }, new Set<string>())
  )

  const doc = new jsPDF({ orientation: columns.length > 5 ? 'landscape' : 'portrait' })
  doc.setFontSize(14)
  doc.text(`${form.name} - Submissions`, 14, 15)

  autoTable(doc, {
    startY: 20,
    head: [columns],
    body: rows.map(row => columns.map(col => String((row as Record<string, unknown>)[col] ?? ''))),
    styles: { fontSize: 8, cellWidth: 'wrap' },
    headStyles: { fillColor: [17, 24, 39] },
  })

  doc.save(`${form.name}-submissions.pdf`)
}

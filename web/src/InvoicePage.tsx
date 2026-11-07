import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

export default function InvoicePage() {
    const invoices: Invoice[] = [
        {
            id: 1,
            amount: 520354,
            status: 'pending',
            issueDate: '2026-09-10',
            dueDate: '2026-10-15',
            customer: {
                name: 'Contrutora Meridiano',
                email: 'comercial@meridiano.com.br'
            }
        },
        {
            id: 2,
            amount: 89600,
            status: 'paid',
            issueDate: '2026-10-01',
            dueDate: '2026-10-31',
            customer: {
                name: 'Gráfica Nova Vida',
                email: 'grafica@novavida.com.br'
            }
        },
        {
            id: 3,
            amount: 125037,
            status: 'pending',
            issueDate: '2026-10-12',
            dueDate: '2026-11-17',
            customer: {
                name: 'Tendi Tudo',
                email: 'contato@tenditudo.com.br'
            }
        }
    ];

    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices} />
        </main>
    </>;
}
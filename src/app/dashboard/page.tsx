import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-semibold">Invoices</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Date</TableHead>
            <TableHead className="text-left">Customer</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left">10/31/2024</TableCell>
            <TableCell className="text-left">Phillip J fry</TableCell>
            <TableCell className="text-left">fry@planetexpress.com</TableCell>
            <TableCell className="text-center">
              <Badge>Open</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}

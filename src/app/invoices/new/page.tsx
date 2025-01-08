import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Dashboard() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-center gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Create Invoice</h1>
      </div>

      <form>
        <div>
          <Label htmlFor="name">Billing Name</Label>
          <Input type="text" name="name" />
        </div>
        <div>
          <Label htmlFor="email">Billing Email</Label>
          <Input type="email" name="email" />
        </div>
        <div>
          <Label htmlFor="value">Value</Label>
          <Input type="text" name="value" />
        </div>
        <div>
          <Label htmlFor="desc">Description</Label>
          <Input type="text" name="desc" />
        </div>
      </form>
    </main>
  );
}

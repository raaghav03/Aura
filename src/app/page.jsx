import Card from "./components/card";
import KPI from "./components/Kpi";
import { WalletCards } from "lucide-react";
export default function Page() {
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        <Card>
          <KPI
            icon={<WalletCards size={20} strokeWidth={1.8} />}
            heading={"Total Expenses"}
            metric={"$12000"}
            subheading={"last 12 months"}
          />
        </Card>
        <Card>
          <KPI
            icon={<WalletCards size={20} strokeWidth={1.8} />}
            heading={"Total Expenses"}
            metric={"$12000"}
          />
        </Card>
        <Card>
          <KPI
            icon={<WalletCards size={20} strokeWidth={1.8} />}
            heading={"Total Expenses"}
            metric={"$12000"}
          />
        </Card>
      </div>
    </>
  );
}

import Card from "./components/card";
import KPI from "./components/Kpi";
import { WalletCards } from "lucide-react";
export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4">
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
              subheading={"last 12 months"}
            />
          </Card>
          <Card>
            <KPI
              icon={<WalletCards size={20} strokeWidth={1.8} />}
              heading={"Total Expenses"}
              metric={"$12000"}
              subheading={"last 12 months"}
            />
          </Card>
        </div>
        <Card>
          <KPI
            heading={"Expense Categorisation"}
            subheading={"Last 12 Months"}
            metric={"1231313123"}
          >
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem architecto minus, id rem recusandae totam
              reiciendis voluptate, obcaecati expedita accusamus iusto
              repudiandae fuga aliquid quam assumenda? Sequi harum est cum?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem architecto minus, id rem recusandae totam
              reiciendis voluptate, obcaecati expedita accusamus iusto
              repudiandae fuga aliquid quam assumenda? Sequi harum est cum?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem architecto minus, id rem recusandae totam
              reiciendis voluptate, obcaecati expedita accusamus iusto
              repudiandae fuga aliquid quam assumenda? Sequi harum est cum?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem architecto minus, id rem recusandae totam
              reiciendis voluptate, obcaecati expedita accusamus iusto
              repudiandae fuga aliquid quam assumenda? Sequi harum est cum?
            </h1>
          </KPI>
        </Card>
       
       
      </div>
    </>
  );
}

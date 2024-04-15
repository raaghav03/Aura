import Card from "./components/card";

export default function Page() {
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        <Card>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
          <p>$12345</p>
        </Card>
        <Card>
          <p>$12345</p>
        </Card>
        <Card>
          <p>$12345</p>
        </Card>
      </div>
    </>
  );
}

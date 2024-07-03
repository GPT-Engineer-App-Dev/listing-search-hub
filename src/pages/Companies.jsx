import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Companies = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Companies</h1>
      </header>
      <section className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Tech Corp</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Location: San Francisco, CA</p>
            <p>Description: Leading technology company specializing in software development...</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Innovate Ltd</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Location: New York, NY</p>
            <p>Description: Innovative company focusing on product management and development...</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Companies;
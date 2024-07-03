import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Job Finder</h1>
        <p className="text-lg text-muted-foreground">Find your dream job today!</p>
      </header>
      <div className="w-full max-w-md">
        <Input placeholder="Search for jobs..." />
      </div>
      <section className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Software Engineer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Company: Tech Corp</p>
            <p>Location: San Francisco, CA</p>
            <p>Description: We are looking for a skilled software engineer...</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product Manager</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Company: Innovate Ltd</p>
            <p>Location: New York, NY</p>
            <p>Description: Seeking an experienced product manager...</p>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
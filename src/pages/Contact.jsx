import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <section className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Message" />
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
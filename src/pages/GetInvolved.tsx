import { Button } from "@/components/ui/button";

const GetInvolved = () => (
  <main className="container py-24">
    <h1 className="text-4xl font-bold font-serif mb-6">Get Involved</h1>
    <p className="text-lg text-muted-foreground max-w-2xl mb-8">
      Sign up to receive updates about future events, news, and resources related to AI in Medical Education.
    </p>
    <Button asChild size="lg">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdnCeIYUF6PMMLOIKor-B2TZ5NsVB5xZ5CCscE3X-VAA8VVpg/viewform" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join the Mailing List
      </a>
    </Button>
  </main>
);

export default GetInvolved;

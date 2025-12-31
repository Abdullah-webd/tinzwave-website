import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AIAutomationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border-0">
              AI Automations
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Automations — Optimize workflows with AI
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6">
              We design and deploy AI-powered automations to reduce manual work,
              speed processes, and unlock new insights for your business.
            </p>

            <div className="flex justify-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                className="border border-primary text-primary bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Use cases</h2>
              <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                <li>Automated document summarization and extraction</li>
                <li>Conversational agents and customer automation</li>
                <li>AI-driven report generation and analytics</li>
                <li>Process optimization with predictive models</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="data:image/jpeg;base64,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"
                alt="AI Automations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our process</h3>
            <p className="text-muted-foreground mb-6">
              We evaluate current workflows, prototype solutions, then iterate
              with measurable KPIs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-lg">Discovery</div>
              <div className="p-6 bg-white/5 rounded-lg">Prototype & Pilot</div>
              <div className="p-6 bg-white/5 rounded-lg">
                Production & Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

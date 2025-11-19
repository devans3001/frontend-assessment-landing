import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Define content for each section
const sectionContent = {
  features: {
    title: "Features Coming Soon",
    description: "We're working hard to bring you amazing features that will revolutionize digital trade across Africa. This section will showcase all the powerful tools and capabilities of our platform.",
    icon: "🚀",
    color: "blue"
  },
  benefits: {
    title: "Benefits Coming Soon", 
    description: "Discover how the AFCFTA Digital Trade Portal will transform cross-border commerce. Learn about the incredible advantages for businesses, governments, and trade partners.",
    icon: "💎",
    color: "green"
  },
  contact: {
    title: "Contact Coming Soon",
    description: "We're establishing comprehensive support channels to assist you. Soon you'll be able to reach our team for inquiries, support, and partnership opportunities.",
    icon: "📞",
    color: "purple"
  }
};

export default function ComingSoonPage({ params }) {
  const section = params.slug?.[0];
  
  // If section doesn't exist in our content, show 404
  if (!section || !sectionContent[section]) {
    notFound();
  }

  const content = sectionContent[section];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-24 h-24 mx-auto mb-8 bg-${content.color}-100 rounded-full flex items-center justify-center`}>
            <span className="text-3xl">{content.icon}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {content.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" variant="outline" className="min-w-[160px]">
                Back to Home
              </Button>
            </Link>
            <Link href="/assessment">
              <Button size="lg" className={`bg-${content.color}-600 hover:bg-${content.color}-700 min-w-[160px]`}>
                Take Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're working diligently to bring you the best digital trade experience. 
            Check back soon for updates or take our assessment to get started today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="text-2xl mb-3">📅</div>
              <h3 className="font-semibold mb-2">Launch Timeline</h3>
              <p className="text-sm text-muted-foreground">Q1 2024</p>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="text-2xl mb-3">🔔</div>
              <h3 className="font-semibold mb-2">Get Notified</h3>
              <p className="text-sm text-muted-foreground">We'll alert you when it's ready</p>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">Have Ideas?</h3>
              <p className="text-sm text-muted-foreground">Share your suggestions with us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const section = params.slug?.[0];
  const content = sectionContent[section];
  
  return {
    title: content ? content.title : "Page Not Found",
  };
}

export async function generateStaticParams() {
  return Object.keys(sectionContent).map((section) => ({
    slug: [section],
  }));
}
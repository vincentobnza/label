import { SubscriptionCard } from "../cards/subscription-card";

/**
 * SubscriptionWrapper component to display subscription details
 * @returns {JSX.Element} SubscriptionWrapper component
 */

const subs = [
  {
    title: "Free Plan",
    description: "Current plan",
    price: "$0",
    features: [
      "Access to basic features",
      "Limited support",
      "Community access",
      "No custom labels",
    ],
    buttonText: "Upgrade",
    buttonVariant: "outline" as const,
    currentPlan: true,
  },
  {
    title: "Pro Plan",
    description: "Recommended for teams",
    price: "$10",
    features: [
      "All Free Plan features",
      "Unlimited Credits",
      "Custom labels",
      "Team collaboration tools",
    ],
    buttonText: "Upgrade",
    buttonVariant: "default" as const,
    learnMoreLink: "/learn-more",
    popular: true,
  },
  {
    title: "Enterprise Plan",
    description: "For large organizations",
    price: "$50",
    features: [
      "All Pro Plan features",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary" as const,
  },
];

export const SubscriptionWrapper = () => {
  return (
    <div className="mt-8 w-full grid grid-cols-3 gap-4">
      {subs.map((sub, index) => (
        <SubscriptionCard
          key={index}
          title={sub.title}
          description={sub.description}
          price={sub.price}
          features={sub.features}
          buttonText={sub.buttonText}
          buttonVariant={sub.buttonVariant}
          learnMoreLink={sub.learnMoreLink}
          currentPlan={sub.currentPlan}
          popular={sub.popular}
        />
      ))}
    </div>
  );
};

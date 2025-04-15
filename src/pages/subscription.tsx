import { Section } from "@/components/theme/section";
import { PaymentMethod } from "@/components/subscription/payment-method";
import { SubscriptionWrapper } from "@/components/subscription/subscription-wrapper";
import { CreditCard } from "lucide-react";

export const Subscription = () => {
  return (
    <Section>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-2">
          <CreditCard strokeWidth={3} />
          <h2 className="text-xl font-semibold">Subscription Details</h2>
        </div>
        <p className="text-sm opacity-80">
          Here you can manage your subscription details.
        </p>

        <SubscriptionWrapper />
      </div>

      <PaymentMethod />
    </Section>
  );
};

export default Subscription;

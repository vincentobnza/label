import { PaymentMethodCard } from "../cards/pm-card";

export const PaymentMethod = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold mb-2">Payment Method</h1>
      <p className="text-sm opacity-70">
        Select a payment method to use for your subscription.
      </p>

      <div className="mt-8 w-full grid grid-cols-3 gap-4">
        <PaymentMethodCard type="Credit Card" active={true} />
        <PaymentMethodCard type="Debit Card" />
        <PaymentMethodCard type="GCash" />
      </div>
    </div>
  );
};

import { Section } from "@/components/theme/section";

const Notifications = () => {
  return (
    <Section>
      <div className="flex flex-col gap-4 p-5">
        <div className="self-start flex items-center gap-4 mb-2 relative">
          <h2 className="text-xl font-medium">Notifications</h2>
        </div>
      </div>
    </Section>
  );
};

export default Notifications;

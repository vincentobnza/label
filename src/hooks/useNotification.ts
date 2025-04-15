import { useQuery } from "@tanstack/react-query";
import { getNotification } from "@/api/notifications";

export const useNotification = () => {
  return useQuery({
    queryKey: ["notification"],
    queryFn: () => getNotification(),
  });
};

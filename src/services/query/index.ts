import { useQuery } from '@tanstack/react-query';
import { schema as kitchenSchema } from './queries/kitchen';

// export const useSignOut = (enabled: boolean) => useQuery({ ...authSchema.signOut, enabled: !!enabled });
// export const useReservation = () => useQuery({ ...seat.getReservation, enabled: false });
export const useKitchenTable = (currentTab: string) => useQuery({ ...kitchenSchema.table(currentTab) });
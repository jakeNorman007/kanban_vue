import { useQuery } from "@tanstack/vue-query";
import { getCards } from "../../services/cardApi";

export function useCards() {

    const { isLoading, error, data: cards } = useQuery({
        queryKey: ["card"],
        queryFn: () => getCards(),
    });

    return { isLoading, error, cards };
};

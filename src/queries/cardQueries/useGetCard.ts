import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import { getCards as cardsAPI } from "../../services/cardApi";

export function getCards() {
    const route = useRoute();
    const listId = route.params.listId as string;

    const { isLoading, error, data: cards } = useQuery({
        queryKey: ["card", listId],
        queryFn: () => cardsAPI(listId),

    });

    return { isLoading, error, cards };
};

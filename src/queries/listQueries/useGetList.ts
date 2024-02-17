import { useQuery } from "@tanstack/vue-query";
import { getLists } from "../../services/listApi";
import { useRoute } from "vue-router";

export function useLists() {

    const route = useRoute();
    const listId = route.params.id as string;

    const { isLoading, error, data: lists } = useQuery({
        queryKey: ["list", listId],
        queryFn: () => getLists(listId),
    });

    return { isLoading, error, lists };
};

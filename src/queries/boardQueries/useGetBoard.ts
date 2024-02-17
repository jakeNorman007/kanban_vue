import { useQuery } from "@tanstack/vue-query";
import { getBoards } from "../../services/boardApi";
import { useRoute } from "vue-router";

export function useBoard() {

    const route = useRoute();
    const id = route.params.id as string;

    const { isLoading, error, data: board } = useQuery({
        queryKey: ["board", id],
        queryFn: () => getBoards(id),
            retry: false,
    });

    return { isLoading, board, error };
};

import { useQuery } from "@tanstack/vue-query";
import { getBoards } from "../../services/boardApi";

export function useBoards() {
    const { isLoading, error, data: boards } = useQuery({
        queryKey: ["board"],
        queryFn: getBoards,
    });

    return { isLoading, error, boards };
}

import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { updateCard as updateCardApi } from "../../services/cardApi";

export function useUpdateCard() {
    const queryClient = useQueryClient();

    const { mutate: updateCard, isLoading: isUpdating } = useMutation({
        mutationFn: ({ cardName, id, cardDescription }) => updateCardApi(cardName, id, cardDescription),
        onSuccess: () => {
            console.log("Card was updated");
            queryClient.invalidateQueries({
                queryKey: ["card"],
            });
        },

        onError: (error) => console.log(error.message),
    });

    return { updateCard, isUpdating};
};

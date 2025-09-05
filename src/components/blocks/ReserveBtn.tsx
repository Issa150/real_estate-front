import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "../../stores/useUserStore";
import { reservationRequest } from "../../features/OfferSinglePageFeatures/api/OfferSingleApi";
import { toast } from "react-toastify";

type ReservingBtnProps = {
    propertyId: number;
};

export default function ReserveBtn({ propertyId }: ReservingBtnProps) {

    const userId = useUserStore((state) => state.id);

    const { mutate, isPending } = useMutation({
        mutationFn: reservationRequest,
        onSuccess: () => {
            toast.success(`Reservation request sent successfully!`);
        },
        onError: (error) => {
            toast.error(`Failed to send reservation request: ${error.message}`);
            console.error("Error during reservation:", error);
        }
    })



    function ReserveHandle() {
         if (!userId || userId === 0) { // Check for a valid userId
            toast.error("You must be logged in to make a reservation.");
            return;
        }
        // Call the mutate function inside the event handler
            mutate({ clientId: userId, propertyId });
    }

    return (
        <>
            <button
                disabled={isPending}
                className="btn btn-primary"
                onClick={ReserveHandle}
                name="submit"
                type="button">
                {isPending ? "Reserving..." : "Reserve"}
            </button>
        </>
    );
}
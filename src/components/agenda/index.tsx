import TailwindCard from "components/cards/tailwind-card";
import TailwindSectionTitle from "components/sections/tailwind-title";
import ArrowDownCircle from "components/icons/ArrowDownCircle";

export default function CallAgenda() {
	return (
		<>
			<TailwindSectionTitle className="mt-6 justify-center items-center">
				<p className="font-bold text-xs md:text-base text-primary-700">
					AGENDA UNA LLAMADA ABAJO
				</p>
				<ArrowDownCircle className="h-6 w-6 text-xs md:text-base text-primary-700" />
			</TailwindSectionTitle>

			<div
				className="calendly-inline-widget"
				data-url="https://calendly.com/gabrielbca15/30min"
				style={{ minWidth: "320px", height: "700px" }}
			>
			</div>
			<script
				type="text/javascript"
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			>
			</script>
		</>
	);
}

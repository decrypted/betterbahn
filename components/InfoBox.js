// Importiere React
import React from "react";

// InfoBox-Komponente zur Erklärung des Split-Ticketing Konzepts
export const InfoBox = () => {
	return (
		<section className="py-8 px-4 bg-blue-50 border border-blue-200 rounded-lg mx-2 mb-8">
			<div className="max-w-4xl mx-auto text-center">
				<div className="bg-white p-6 rounded-lg shadow-sm">
					<h3 className="text-lg font-semibold text-blue-900 mb-4">
						Was ist BetterBahn?
					</h3>
					<p className="text-gray-700 leading-relaxed">
						<strong>TL;DR:</strong> Bahntickets können durch automatische Überprüfungen für &ldquo;Split-Ticketing&rdquo; günstiger werden. Split-Ticketing bedeutet, dass eine Reise in mehrere kleinere Abschnitte aufgeteilt wird. Aufgrund der Preisstruktur der Deutschen Bahn kann dies weniger kosten als der Kauf eines durchgehenden Tickets.
					</p>
				</div>
			</div>
		</section>
	);
};
import { saigon, createRoninModal } from "@roninbuilders/modal"
import "@roninbuilders/modal-ui"

createRoninModal({
	chain: saigon,
	projectId: "cdbd18f9f96172be74c3e351ce99b908",
	darkMode: true,
	waypoint:{
		clientId: "9999ea8e-61eb-431d-a328-43942ea1b154"
	}
})

export default function Modal() {
	//@ts-ignore
  return <ronin-button/>
}
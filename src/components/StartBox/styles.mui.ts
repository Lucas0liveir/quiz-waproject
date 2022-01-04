import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
	root: {
		display: "flex",
		margin: "200px auto",	
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		minHeight: 150,
		height: 'min-content',
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
		textAlign: "center"
	},
	contentButtons: {
		display: "flex",
		margin: "150px -150px 0 0",
		width: '100%',
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		minHeight: 200,
		height: 'min-content',
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
		textAlign: "center"
	},
	groupButtons: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	stack: {
		display: "flex",
		height: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
})

export { useStyles }
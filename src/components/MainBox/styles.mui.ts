import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
	root: {
		width: "100%",
		margin: "auto",
		height: "100%",
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},
	container: {
		width: 450,
		minHeight: 200,
		height: 'min-content',
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
		display: "flex",
		justifyContent: "space-evenly"
	},
	score: {
		display: "flex",
		fontSize: 24,
		alignItems: "center",
		marginBottom: 15
	},
	questions: {
		width: "100%",
		position: "relative"
	},
	questionCount: {
		marginBottom: 20
	},
	span: {
		fontSize: 28,
	},
	questionText: {
		marginBottom: 12
	},
	answerSection: {
		width: "100%",
		display: "flex",
		marginTop: 15,
		flexDirection: "column",
		justifyContent: "space-between"
	},
	spacing: {
		marginTop: 15
	}
})

export { useStyles }
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
	root: {
		width: "85%",
		minHeight: 200,
		height: 'min-content',
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},
	score: {
		display: "flex",
		fontSize: 24,
		alignItems: "center"
	},
	questions: {
		width: "100%",
		position: "relative"
	},
	divisor: {
		marginTop: 15,
		width: "100%",
		border: "1px solid grey"
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
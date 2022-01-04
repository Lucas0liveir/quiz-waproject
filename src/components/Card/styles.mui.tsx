import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		
	},
	cards: {
		width: "100%",
		minHeight: 200,
		height: 'min-content',
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 25px 0px rgba(0, 0, 0, 0.55)",
	},
	resume: {
		width: "100%",
		height: "100%",
		borderRadius: 15,
		padding: 20,
		boxShadow: "10px 10px 25px 0px rgba(0, 0, 0, 0.75)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	}
	
})

export { useStyles }
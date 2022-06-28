import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageApp from '../image';


export interface IProps {
    title: string,
    id: number;
    description: string,
    price: number,
    brand: string,
    thumbnail: string
}
const useStyles = makeStyles({
    root: {
        width: "100%",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function Product(props: IProps) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { title, id, description, thumbnail, brand, price } = props;
    return <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="h2">
                {id}{bull}{brand}{bull}{price}$
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {description}
            </Typography>
            <Typography variant="body2" component="p">
                <ImageApp src={thumbnail} />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Buy</Button>
        </CardActions>
    </Card>

}
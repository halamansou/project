import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='contaner'>
      <div className='div'>
      <Card sx={{ maxWidth: 260 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ATLANTIC MACKEREL"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://purewows3.imgix.net/images/articles/2021_07/types-of-fish-to-eat_atlantic-mackerel.jpg?auto=format,compress&cs=strip"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Recipes: Roasted Mackerel with Garlic and Paprika, Pan-Seared Mackerel with Sweet Peppers and Thyme, Korean Grilled Mackerel
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
          
          <Typography paragraph>
          Some of the vitamin-rich fish on this list may make this surprising, but not many foods contain a ton of natural vitamin D. Then there’s mackerel, which is not only packed to the gills with it, but it also contains 21 grams of protein per fillet. It has a rich, soft texture and a pronounced flavor that’s sweet and fishy, kind of like tuna. The darker parts of its meat have a stronger taste, so feel free to cut them out for a milder flavor. It’s commonly roasted, baked, pan-seared and even fried. Atlantic mackerel is our pick for its low mercury content (king and Spanish mackerel alternatively have high mercury levels).
          </Typography>
         
        </CardContent> */}
      </Collapse>
    </Card>
      </div>
      <div  className='div'>
      <Card sx={{ maxWidth: 260 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="RED SNAPPER"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://purewows3.imgix.net/images/articles/2021_07/types-of-fish-to-eat_red-snapper.jpg?auto=format,compress&cs=strip"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Recipes: Rodney Scott’s Honey-Butter Fish, Cajun-Inspired Blackened Red Snapper, Mediterranean Whole Roasted Red Snapper
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
   
          <Typography paragraph>
          Odds are you’ll see red snapper cut into fillets with the skin still on at the supermarket. If you want to make the most sustainable choice, go for a cut caught near Texas, Louisiana, Alabama or the Florida Gulf instead of Mexico (it’ll be easiest to find over the summer). Red snapper can be baked, broiled and poached just like any other fish, but it’s particularly delicious grilled or fried whole. Cut the fish down the middle and make slits into the sides for citrus, herbs and aromatics, wrap it in foil or banana leaves, then steam or grill it until it’s crisp and cooked through.
          </Typography>
         
        </CardContent> */}
      </Collapse>
    </Card>
      </div>
      <div  className='div'>
      <Card sx={{ maxWidth: 260 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="SALMON"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://purewows3.imgix.net/images/articles/2021_07/types-of-fish-to-eat_salmon.jpg?auto=format,compress&cs=strip"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Recipes: Salmon Burgers, Hemp and Walnut Crusted Salmon with Broccoli and Kimchi Cauliflower Rice, Salmon Noodle Bowls with Chili-Yuzu Relish and Pickled Radishes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          {/* <Typography paragraph>
          It’s a weeknight mainstay for a reason. Salmon is beloved for its versatility, quick cook time and mild flavor. Even fish haters can get down with its subtle taste, especially if it’s in a creamy sauce or coated in spices or fruit salsa. Like most fish, salmon can be baked, broiled, pan-fried, sauteed, slow-cooked and grilled. It’s versatile enough to pair with everything from a crisp salad to lemon pasta. Wild salmon tends to be a bit lower in fat and higher in protein, vitamins and minerals, so choose it over farmed when possible.
          </Typography> */}
         
        </CardContent>
      </Collapse>
    </Card>
      </div>
    </div>
  );
}

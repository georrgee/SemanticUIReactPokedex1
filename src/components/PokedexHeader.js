import React from 'react';
import { Segment, Header, Image} from 'semantic-ui-react';

const PokedexHeader = ( {name, author}) => {
    return (
        <Segment basic inverted padded='very' vertical>
            <Header as='h1'>This is a Header for {name} Pokedex</Header>
            <Image src={'pokeball.png'} size={'small'} centered={true}/>
            <Header as='h3'>Author: {author}</Header>
        </Segment>  
    )
};

export default PokedexHeader; // transport this whereever its needed


// div is the top level wrapper
// add a prop (look at line 4, 'author')
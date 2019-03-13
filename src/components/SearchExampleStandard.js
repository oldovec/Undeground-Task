import _ from 'lodash'
import React, {Component} from 'react'
import {Search} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {changeStartPoint, changeFinishPoint} from '../store/action'

let source = [{ title: 'Barkingside' },
    { title: 'Buckhurst Hill' },
    { title: 'Bethnal Green' },
    { title: 'Bond Street' },
    { title: 'Chancery Lane' },
    { title: 'Chigwell' },
    { title: 'Debden' },
    { title: 'East Acton' },
    { title: 'Epping' },
    { title: 'Fairlop' },
    { title: 'Grange Hill' },
    { title: 'Gants Hill' },
    { title: 'Holborn' },
    { title: 'Hanger Lane' },
    { title: 'Hainault' },
    { title: 'Holland Park' },
    { title: 'Loughton' },
    { title: 'Lancaster Gate' },
    { title: 'Leyton' },
    { title: 'Leytonstone' },
    { title: 'Marble Arch' },
    { title: 'Mile End' },
    { title: 'North Acton' },
    { title: 'Newbury Park' },
    { title: 'Notting Hill Gate' },
    { title: 'Northolt' },
    { title: 'Oxford Circus' },
    { title: 'Perivale' },
    { title: 'Queensway' },
    { title: 'Redbridge' },
    { title: 'Ruislip Gardens' },
    { title: 'Roding Valley' },
    { title: 'Snaresbrook' },
    { title: 'St. Paul\'s' },
    { title: 'South Woodford' },
    { title: 'Tottenham Court Road' },
    { title: 'Theydon Bois' },
    { title: 'White City' },
    { title: 'Woodford' },
    { title: 'Wanstead' },
    { title: 'West Acton' },
    { title: 'Bank' },
    { title: 'Ealing Broadway' },
    { title: 'Greenford' },
    { title: 'Liverpool Street' },
    { title: 'Shepherd\'s Bush' },
    { title: 'Stratford' },
    { title: 'South Ruislip' },
    { title: 'West Ruislip' },
    { title: 'Aldgate' },
    { title: 'Barbican' },
    { title: 'Baker Street' },
    { title: 'Chesham' },
    { title: 'Croxley' },
    { title: 'Eastcote' },
    { title: 'Euston Square' },
    { title: 'Finchley Road' },
    { title: 'Great Portland Street' },
    { title: 'Hillingdon' },
    { title: 'Ickenham' },
    { title: 'Moor Park' },
    { title: 'North Harrow' },
    { title: 'Northwick Park' },
    { title: 'Northwood' },
    { title: 'Northwood Hills' },
    { title: 'Pinner' },
    { title: 'Preston Road' },
    { title: 'Ruislip Manor' },
    { title: 'Ruislip' },
    { title: 'Rayners Lane' },
    { title: 'Uxbridge' },
    { title: 'Watford' },
    { title: 'West Harrow' },
    { title: 'Wembley Park' },
    { title: 'Amersham' },
    { title: 'Chalfont & Latimer' },
    { title: 'Chorleywood' },
    { title: 'Harrow-on-the-Hill' },
    { title: 'King\'s Cross & St Pancras International' },
    { title: 'Rickmansworth' },
    { title: 'Farringdon' },
    { title: 'Moorgate' },
    { title: 'Bayswater' },
    { title: 'Embankment' },
    { title: 'Edgware Road' },
    { title: 'Goldhawk Road' },
    { title: 'Gloucester Road' },
    { title: 'High Street Kensington' },
    { title: 'Ladbroke Grove' },
    { title: 'Latimer Road' },
    { title: 'Monument' },
    { title: 'Mansion House' },
    { title: 'Royal Oak' },
    { title: 'Shepherd\'s Bush Market' },
    { title: 'St. James\'s Park' },
    { title: 'South Kensington' },
    { title: 'Sloane Square' },
    { title: 'Temple' },
    { title: 'Tower Hill' },
    { title: 'Wood Lane' },
    { title: 'Westbourne Park' },
    { title: 'Blackfriars' },
    { title: 'Cannon Street' },
    { title: 'Hammersmith' },
    { title: 'Paddington' },
    { title: 'Victoria' },
    { title: 'Westminster' },
    { title: 'Acton Town' },
    { title: 'Aldgate East' },
    { title: 'Bromley-by-Bow' },
    { title: 'Becontree' },
    { title: 'Barons Court' },
    { title: 'Bow Road' },
    { title: 'Chiswick Park' },
    { title: 'Dagenham East' },
    { title: 'Dagenham Heathway' },
    { title: 'Ealing Common' },
    { title: 'Earl\'s Court' },
    { title: 'East Ham' },
    { title: 'Elm Park' },
    { title: 'East Putney' },
    { title: 'Fulham Broadway' },
    { title: 'Hornchurch' },
    { title: 'Plaistow' },
    { title: 'Parsons Green' },
    { title: 'Putney Bridge' },
    { title: 'Ravenscourt Park' },
    { title: 'Stamford Brook' },
    { title: 'Southfields' },
    { title: 'Stepney Green' },
    { title: 'Turnham Green' },
    { title: 'Upminster Bridge' },
    { title: 'Upton Park' },
    { title: 'Upney' },
    { title: 'Wimbledon Park' },
    { title: 'West Kensington' },
    { title: 'Barking' },
    { title: 'Gunnersbury' },
    { title: 'Kensington' },
    { title: 'Kew Gardens' },
    { title: 'Richmond' },
    { title: 'Upminster' },
    { title: 'West Brompton' },
    { title: 'West Ham' },
    { title: 'Wimbledon' },
    { title: 'Whitechapel' },
    { title: 'Alperton' },
    { title: 'Arnos Grove' },
    { title: 'Arsenal' },
    { title: 'Bounds Green' },
    { title: 'Boston Manor' },
    { title: 'Caledonian Road' },
    { title: 'Covent Garden' },
    { title: 'Cockfosters' },
    { title: 'Green Park' },
    { title: 'Hatton Cross' },
    { title: 'Hyde Park Corner' },
    { title: 'Hounslow Central' },
    { title: 'Hounslow East' },
    { title: 'Hounslow West' },
    { title: 'Holloway Road' },
    { title: 'Knightsbridge' },
    { title: 'Leicester Square' },
    { title: 'Manor House' },
    { title: 'North Ealing' },
    { title: 'Northfields' },
    { title: 'Oakwood' },
    { title: 'Osterley' },
    { title: 'Piccadilly Circus' },
    { title: 'Park Royal' },
    { title: 'Russell Square' },
    { title: 'South Ealing' },
    { title: 'Southgate' },
    { title: 'South Harrow' },
    { title: 'Sudbury Hill' },
    { title: 'Sudbury Town' },
    { title: 'Turnpike Lane'},
    { title: 'Wood Green' },
    { title: 'Finsbury Park' },
    { title: 'Heathrow Airport Terminals 1-3' },
    { title: 'Heathrow Airport Terminal 5' },
    { title: 'Kilburn Park' },
    { title: 'Lambeth North' },
    { title: 'Maida Vale' },
    { title: 'Regent\'s Park' },
    { title: 'Warwick Avenue' },
    { title: 'Charing Cross' },
    { title: 'Elephant & Castle' },
    { title: 'Harlesden' },
    { title: 'Harrow & Wealdstone' },
    { title: 'Kensal Green' },
    { title: 'Kenton' },
    { title: 'Marylebone' },
    { title: 'North Wembley' },
    { title: 'Queen\'s Park' },
    { title: 'Stonebridge Park' },
    { title: 'South Kenton' },
    { title: 'Waterloo' },
    { title: 'Willesden Junction' },
    { title: 'Wembley Central' },
    { title: 'Pimlico' },
    { title: 'Stockwell' },
    { title: 'Warren Street' },
    { title: 'Blackhorse Road' },
    { title: 'Brixton' },
    { title: 'Euston' },
    { title: 'Highbury & Islington' },
    { title: 'Seven Sisters' },
    { title: 'Tottenham Hale' },
    { title: 'Vauxhall' },
    { title: 'Walthamstow Central' },
    { title: 'Bermondsey' },
    { title: 'Canada Water' },
    { title: 'Kilburn' },
    { title: 'Southwark' },
    { title: 'Canons Park' },
    { title: 'Dollis Hill' },
    { title: 'Kingsbury' },
    { title: 'Neasden' },
    { title: 'Queensbury' },
    { title: 'St. John\'s Wood' },
    { title: 'Stanmore' },
    { title: 'Swiss Cottage' },
    { title: 'Willesden Green' },
    { title: 'Canning Town' },
    { title: 'Canary Wharf' },
    { title: 'London Bridge' },
    { title: 'North Greenwich' },
    { title: 'West Hampstead' },
    { title: 'Belsize Park' },
    { title: 'Hampstead' },
    { title: 'Archway' },
    { title: 'Angel' },
    { title: 'Borough' },
    { title: 'Burnt Oak' },
    { title: 'Brent Cross' },
    { title: 'Chalk Farm' },
    { title: 'Colindale' },
    { title: 'Clapham Common' },
    { title: 'Clapham North' },
    { title: 'Clapham South' },
    { title: 'Colliers Wood' },
    { title: 'Camden Town' },
    { title: 'East Finchley' },
    { title: 'Edgware' },
    { title: 'Finchley Central' },
    { title: 'Goodge Street' },
    { title: 'Golders Green' },
    { title: 'High Barnet' },
    { title: 'Hendon Central' },
    { title: 'Highgate' },
    { title: 'Kennington' },
    { title: 'Morden' },
    { title: 'Mill Hill East' },
    { title: 'Mornington Crescent' },
    { title: 'Oval' },
    { title: 'South Wimbledon' },
    { title: 'Totteridge & Whetstone' },
    { title: 'Tooting Bec' },
    { title: 'Tooting Broadway' },
    { title: 'Tufnell Park' },
    { title: 'West Finchley' },
    { title: 'Woodside Park' },
    { title: 'Balham' },
    { title: 'Kentish Town' },
    { title: 'Old Street' },
    { title: 'Euston Square' }];

class SearchExampleStandard extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''});

    handleResultSelect = (e, {result}) => this.setState({value: result.title});

    handleSearchChange = (e, {value}) => {
        this.setState({isLoading: true, value});

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    };

    render() {
        const {changeStartPoint, changeFinishPoint} = this.props;
        const {isLoading, value, results} = this.state;
        if(this.props.type === '1'){
            changeStartPoint(value);
        } else if(this.props.type === '2'){
            changeFinishPoint(value);
        }
        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
                results={results}
                value={value}
            />
        )
    }
}

const putStateToProps = (state) => {
    return {
        startPoint: state.startPoint,
        finishPoint: state.finishPoint
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeStartPoint: bindActionCreators(changeStartPoint, dispatch),
        changeFinishPoint: bindActionCreators(changeFinishPoint, dispatch)
    }
};

export default connect(putStateToProps, putActionsToProps)(SearchExampleStandard)
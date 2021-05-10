var state = document.getElementById( "state" );
var country = document.getElementById( "country" );

function analyze( ) {
    $( document )
        .ready( function ( ) {
            $.getJSON( 'https://www.mohfw.gov.in/data/datanew.json', function ( data ) {
                for ( var i = 0; i < data.length; i++ ) {
                    if ( data[ i ].state_name === state.value ) {
                        document.getElementById( 'example' )
                            .innerHTML = `Active cases: ${data[ i ].active}<br>Recovered cases: ${data[ i ].cured}<br>Deaths: ${data[ i ].death}`
                    }
                }
            } );
        } );
}

function analyzeCountry( ) {
    fetch( "https://pomber.github.io/covid19/timeseries.json" )
        .then( response => response.json( ) )
        .then( data => {
            data[ country.value ].forEach( ( { confirmed, recovered, deaths } ) =>
                document.getElementById( 'example2' )
                .innerHTML = `Active cases: ${confirmed - recovered - deaths}<br>Confirmed cases: ${confirmed} <br>Recovered cases: ${recovered} <br>Deaths: ${deaths}`
            );
        } );
}

function analyzeFull( ) {
    analyze( );
    analyzeCountry( );
}

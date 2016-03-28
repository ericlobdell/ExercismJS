
class Year {

    year: number;

    constructor( year: number ){
        this.year = year;
    }

    isLeap( ) {
        if ( isDivisibleBy( this.year, 4 ) ) {

            if ( isDivisibleBy( this.year, 100 ) )
                return isDivisibleBy( this.year, 400 );
            else
                return true;
        }
        else
            return false;
    }

}

function isDivisibleBy( num: number, test: number ) {
    return num % test === 0;
}
import React from 'react'
import { Grid, Typography, Card, CardContent, Grow} from "@material-ui/core";
import { Line, CartesianGrid, LineChart, XAxis, YAxis, BarChart, Bar } from 'recharts';

const data = [ {date: "A" ,uv: 400}, {date: "B", uv: 500}, {date: "C", uv: 700} ]
const stock_data = [ {name :"AAPL", stocks: 24 }, {name :"GOOGL", stocks: 10 },
{name :"NFLX", stocks: 22 }, {name :"AMZN", stocks: 44 }, {name: "SEN", stocks: "15"} ]

export default function HomePage() {
    return(
        <Grow in={4}>
            <Grid container>
                <Grid container>
                <Grid item>
                    <Typography variant="h4">
                    Welcome, Anim Malvat
                    </Typography>
                </Grid>
                </Grid>
                <Grid style={{paddingTop: "2%"}} container spacing={7}>
                <Grid item>
                    <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                        CREDIT
                        </Typography>
                        <br />
                        <Typography variant="h4">
                        $40,000  
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                        STOCKS OWNED
                        </Typography>
                        <br />
                        <Typography variant="h4">
                        976  
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" >
                    <CardContent>
                        <Typography variant="h6">
                        STOCKS COST
                        </Typography>
                        <br />
                        <Typography variant="h4">
                        $986, 208  
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" style={{backgroundColor: "#3F51B5", color: "white"}}>
                    <CardContent>
                        <Typography variant="h6">
                        STOCKS PRICE
                        </Typography>
                        <br />
                        <Typography variant="h4">
                        $986,100  
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                </Grid>
                {/* next row  */}
                <Grid style={{paddingTop: "4%"}} container spacing={7}>
                <Grid item>
                    <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5">
                        PROFIT
                        </Typography>
                        <br />
                        <LineChart width={500} height={300} data={data}>
                        <Line type="monotone" dataKey="uv" />
                        <XAxis dataKey="date" />
                        <YAxis />
                    </LineChart>

                    </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5">
                        TOP 5 STOCKS
                        </Typography>
                        <br />
                        <BarChart width={440} height={300} data={stock_data}>
                        <Bar barSize={30} type="monotone" dataKey="stocks" fill="#3F51B5"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                    </BarChart>

                    </CardContent>
                    </Card>
                </Grid>

                </Grid>
            </Grid>
        </Grow>
    )
}
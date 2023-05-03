import Favourites from './Favourites';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meal/:id" component={Meal} />
          <Route exact path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
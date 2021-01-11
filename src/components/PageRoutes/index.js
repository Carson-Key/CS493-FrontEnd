import { Switch, Route } from "react-router-dom";

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="h-screen flex flex-wrap content-center justify-center">
          <div className="p-4">1</div>
          <div className="p-4">2</div>
          <div className="p-4">3</div>
        </div>
      </Route>
      <Route path="/wrong">
        <div className="h-screen flex flex-wrap content-center justify-center">
          <div className="p-4">2</div>
          <div className="p-4">3</div>
          <div className="p-4">1</div>
        </div>
      </Route>
    </Switch>
  );
}

export default PageRoutes;

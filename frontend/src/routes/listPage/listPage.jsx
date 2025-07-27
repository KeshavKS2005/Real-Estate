import "./listPage.scss";
import Filter from "../../components/filter/Filter";  
import Card from "../../components/card/Card";

import { useLoaderData } from "react-router-dom";  
function ListPage() {
  const posts = useLoaderData();  

  return (
    <div className="listPage">
      <div className="listContainer"> 
        <div className="wrapper">
          <Filter />
          
          {posts && posts.length > 0 ? (
            posts.map((post) => (  
              <Card key={post.id} item={post} />
            ))
          ) : (
            <p>No listings found for your search criteria.</p> 
          )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
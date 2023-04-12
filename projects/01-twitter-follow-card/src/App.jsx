import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "amartinezpa",
    name: "Aaron Martínez",
    isFollowing: false,
  },
  {
    userName: "dmtor",
    name: "Dídac Tortosa",
    isFollowing: true,
  },
  {
    userName: "random65",
    name: "Usuario 3",
    isFollowing: true,
  },
  {
    userName: "random32",
    name: "Usuario 4",
    isFollowing: false,
  },
  
];

export function App() { 
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
      }
    </section>
  );
}

const teamMembers = [
    { name: "Andrea", role: "UX Junior", mood: "😊", image:"https://randomuser.me/api/portraits/men/76.jpg" },
    { name: "Alvaro", role: "Back-end Developer", mood: "😀", image:"https://randomuser.me/api/portraits/men/77.jpg" },
    { name: "Juan", role: "UX Senior", mood: "🙂", image:"https://randomuser.me/api/portraits/men/78.jpg" },
    { name: "Jose", role: "Marketing", mood: "😐", image:"https://randomuser.me/api/portraits/men/79.jpg" },
    { name: "Maria", role: "UX Intern", mood: "😕", image:"https://randomuser.me/api/portraits/men/80.jpg" }
  ];
  
  const moodPositions = {
    "😕": "0%",
    "😐": "50%",
    "🙂": "70%",
    "😀": "85%",
    "😊": "100%"
  };
  
  const TeamMood = () => {
    return (
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Team Mood</h2>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center space-x-3">
                <img className="w-10 h-10 bg-gray-300 rounded-full" src={`${member.image}`} alt={member.name} />
                <div>
                  <p className="text-sm font-medium text-gray-800">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="absolute top-[-10px] text-xl"
                  style={{ left: moodPositions[member.mood], transform: "translateX(-50%)" }}
                >
                  {member.mood}
                </div>
                <div className="h-2 rounded-full" style={{ width: moodPositions[member.mood] }}></div>
              </div>
              <hr className="my-3" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TeamMood;
  
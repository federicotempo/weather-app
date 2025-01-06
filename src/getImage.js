function getImage(conditions) {
  const normalizedCondition = conditions.toLowerCase();

  switch (true) {
    case normalizedCondition.includes("snow"):
      return 'url("https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';

    case normalizedCondition.includes("rain") ||
      normalizedCondition.includes("storm"):
      return 'url("https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';

    case normalizedCondition.includes("sunny") ||
      normalizedCondition.includes("clear"):
      return 'url("https://images.unsplash.com/photo-1499346030926-9a72daac6c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920")';

    case normalizedCondition.includes("cloud") ||
      normalizedCondition.includes("overcast"):
      return 'url("https://images.unsplash.com/photo-1469365556835-3da3db4c253b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  }
}

function changeBackgroundImage(conditions) {
  document.body.style.backgroundColor = "none";

  const backgroundImage = getImage(conditions);
  document.body.style.background = backgroundImage;
  document.body.style.backgroundSize = "cover";
}

export { changeBackgroundImage };

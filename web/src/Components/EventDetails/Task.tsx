type TaskProps = {
  label: string;
  isComplete: boolean | undefined;
}

const Task = ({label, isComplete} : TaskProps)  => {
  return (
      <div className="flex flex-row gap-2">
        <h3 className="font-semibold">{label}?</h3>
        
        <p className="font-black">
          {isComplete ? <span className="text-lime-600">Yes</span> : <span className="text-red-500">No</span>}
        </p>
      </div>
    );
};

export default Task;
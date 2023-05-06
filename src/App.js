import {useState} from 'react';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { SortableItem } from './SortableItem';
import AddOutline from './AddOutline';

function App() {
  const [outlines, setOutlines ] = useState([
    'Shopping in Barcelona',
    'Famous Shopping Streets',
    'Shopping malls',
    'Sales Tax Refunds',
    'You may also be interested in',
    'Where to Stay',
  ]);
  
  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setOutlines((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
      
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen w-6/12 p-4 m-auto">
        <h3>Edit outlines!</h3>
        <span className="text-gray-500">Outlines</span>
        <div className="p-3 flex flex-col justify-center">
          <SortableContext
            items={outlines}
            strategy={verticalListSortingStrategy}
          >
            {/* We need components that use the useSortable hook */}
            {outlines.map(outline => <SortableItem key={outline} id={outline}/>)}
          </SortableContext>
          <AddOutline outlines={outlines} setOutlines={setOutlines} />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
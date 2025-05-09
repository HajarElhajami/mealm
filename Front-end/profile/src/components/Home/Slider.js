import Slider from 'react-slick';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


function Business() {
  return (
    <div>
{/* معرض الأعمال مع سلايدر */}
<div className="mt-12 px-8 pb-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">معرض الأعمال</h2>
          
          <div className="mt-6">
            <Slider {...sliderSettings}>
              {[
                { id: 1, color: "3b82f6", text: "عمل1" },
                { id: 2, color: "10b981", text: "عمل2" },
                { id: 3, color: "f59e0b", text: "عمل3" },
                { id: 4, color: "ef4444", text: "عمل4" },
                { id: 5, color: "8b5cf6", text: "عمل5" },
                { id: 6, color: "ec4899", text: "عمل6" }
              ].map(item => (
                <div key={item.id} className="px-2">
                  <img 
                    src={`https://via.placeholder.com/300/${item.color}/ffffff?text=${item.text}`}
                    alt={`Work ${item.id}`}
                    className="h-48 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <br/>
    </div>
  );
}

export default Business;

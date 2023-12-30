import { Link } from "react-router-dom"
import Comments from "./Comments"
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";


const MusicSinglePage = () => {
  return (
    <main className="max-w-6xl mt-5 mx-auto">
              {/* Image Section */}
              <div className="">
                    <div>
                    <img src="https://wallpapercave.com/wp/wp8824771.jpg" alt="" className="w-full object-cover h-[350px]" />
                    </div>

                    <div className="space-y-4">
                             
                              <div className="flex items-center mt-4 gap-4">
                                      <img src="https://thumbs.dreamstime.com/b/portrait-mature-man-smiling-camera-stock-image-88913449.jpg" alt="" className="w-10 h-10 object-cover rounded-full" />

                                      <div>
                                          <h1 className="text-[14px]">Amar Mahato</h1>
                                          <p className="text-[12px]">Publish - <span className="text-gray-300">21.08.2023</span> </p>
                                      </div>

                                      <div className="flex items-center gap-2">
                                             <p className="cursor-pointer bg-green-400 rounded-full px-2 py-2 text-gray-700"><RiEdit2Fill /></p>
                                             <Link to="/" className="cursor-pointer bg-green-400 rounded-full px-2 py-2 text-gray-700"><AiFillDelete /></Link>
                                      </div>
                              </div>

                              <h1 className="text-[40px]">Easiest Way for React State Managenment</h1>

                    </div>
                  
              </div>

              {/* Section 2*/}

              <div className="flex gap-14 py-10">
                      {/* Details */}
                     <div className="flex-wipper">
                            <p className="text-[15px] lg:text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, animi. Enim veritatis incidunt deleniti mollitia magni quisquam voluptatem ex accusantium, quae iure illum sed provident quod cupiditate suscipit laborum? Velit?
                            Asperiores iure perspiciatis ut aperiam ad autem amet? Dolore aspernatur odio ut ipsum voluptas deleniti nulla rem nobis voluptatibus, laborum maiores alias praesentium voluptatem unde odit velit magnam fuga quos.
                            Vero animi repellendus corporis iure, fugiat laborum eos ipsum quos vitae blanditiis hic nostrum minus magni labore modi soluta, earum doloremque pariatur unde deserunt aperiam iusto. Dolores error dicta odio!
                            Fuga in nisi quisquam dicta laudantium rem! Ex quidem aspernatur soluta facilis necessitatibus officia delectus corporis, suscipit itaque cumque tenetur eum eaque debitis consequuntur repellendus, illo ut molestiae eligendi. Quasi?
                            Quasi magni omnis pariatur, voluptatum illo quisquam mollitia quam at vero nulla rem ullam quia. Maxime soluta a, ratione omnis deleniti enim minus illo reprehenderit provident unde, deserunt impedit veniam.
                            Magni itaque nemo aliquam iste dolorum cum, enim maiores natus, beatae nihil quo eos cumque. Quidem officiis cumque harum, neque expedita soluta quisquam culpa enim saepe molestiae accusantium beatae aliquam.
                            Adipisci, in consequuntur labore aliquam similique iusto asperiores earum vero nam ea ducimus ratione provident nisi harum! Assumenda, ea consequatur sapiente nihil commodi facilis alias molestiae dolorum magni ratione voluptatibus.
                            Ipsum et accusantium id suscipit eum esse repellendus molestiae delectus omnis sapiente, numquam quaerat qui reiciendis ab magni! Quod unde tempora aliquam sequi necessitatibus similique ratione in eius vitae fugiat.
                            A nisi, suscipit vel iste dolorem accusamus. Consectetur magni vitae ad commodi harum doloribus est alias molestiae nihil corporis ipsa recusandae eaque quod fugiat reiciendis, soluta cupiditate! Aperiam, dicta iusto.
                            Ea, fugiat blanditiis! Suscipit quia quasi illum doloribus vitae officia recusandae? Ullam id dicta tempora dolores! Iste laudantium aut dicta odio nulla error, veniam beatae tempore quasi officia dolores aliquid.</p>
                           
                           <div className="py-4">
                               <Comments/>

                           </div>
                     </div>


                      {/* Related Section */}
                      <div className="flex-item hidden lg:block">
                               <h1 className="text-[30px] line-clamp-1 font-semibold">Related Post</h1>

                               <div className="mt-2 py-2 ">
                                      <img src="https://wallpapercave.com/wp/wp8824771.jpg" alt=""  className="object-cover h-[120px] w-full"/>
                                      <p className="text-[14px] font-semibold">Easiest Way for React State Managenment</p>
                                      <Link to="/" className=" py-1 border-b text-[13px] border-red-500 w-max">Read More...</Link>
                               </div>


                               <div className="mt-2 py-2 ">
                                      <img src="https://th.bing.com/th/id/R.383d79c6bf87a5736407ba3d1d374a82?rik=vyeoGmYrNtEBnQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1581355931381-d1173e039b4a%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=EuSnjZSVW0MNF%2bbbQ2qjH8oYh7Ke4Sg6JjOEmJAxBlk%3d&risl=&pid=ImgRaw&r=0" alt=""  className="object-cover h-[120px] w-full"/>
                                      <p className="text-[14px] font-semibold">Easiest Way for React State Managenment</p>
                                      <Link to="/" className=" py-1 border-b text-[13px] border-red-500 w-max">Read More...</Link>
                               </div>

                               <div className="mt-2 py-2 ">
                                      <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="object-cover h-[120px] w-full"/>
                                      <p className="text-[14px] font-semibold">Easiest Way for React State Managenment</p>
                                      <Link to="/" className=" py-1 border-b text-[13px] border-red-500 w-max">Read More...</Link>
                               </div>

                               <div className="mt-2 py-2 ">
                                      <img src="https://wallpapercave.com/wp/wp8824771.jpg" alt=""  className="object-cover h-[120px] w-full"/>
                                      <p className="text-[14px] font-semibold">Easiest Way for React State Managenment</p>
                                      <Link to="/" className=" py-1 border-b text-[13px] border-red-500 w-max">Read More...</Link>
                               </div>
                      </div>
              </div>
    </main>
  )
}

export default MusicSinglePage
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using angular2.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace angular2
{
    [Route("api/[controller]")]
    public class BlogsController : Controller
    {

        public static List<Blog> blogs = new List<Blog>() { new Blog { Id=1,Title="asdf",Description="fdghdfg"} };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Blog> Get()
        {
            return blogs;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Blog blog)
        {
            blogs.Add(blog);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

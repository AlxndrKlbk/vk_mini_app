from image_search.bing_scraper import googleimagesdownload
response = googleimagesdownload()
search_str = "bees"
arguments = {
    "search": search_str,
    "limit": 10,
    "download": True,
    "keywords": search_str,
    "chromedriver": r"C:\Users\Ivan\PycharmProjects\vk_mini_app_1\chromedriver.exe",
    # "url": "https://www.bing.com/images/search?q=" + search_str.replace(' ', '%20'),
    # "image_directory": search_str.replace(' ', '_')
}
a = googleimagesdownload.download(response, arguments)
print(a)







# from google_images_download import google_images_download
#
# response = google_images_download.googleimagesdownload()
# absolute_image_paths = response.download({"keywords": "Polar bears", "limit": "20"})
# print(absolute_image_paths)








# import google_images_download
#
# response = google_images_download.googleimagesdownload()
#
# google_images_download.absolute_import.
# absolute_image_paths = response.download()
#
#
# from datetime import date
# from icrawler.builtin import GoogleImageCrawler
#
# google_crawler = GoogleImageCrawler(parser_threads=2, downloader_threads=4, storage={'root_dir': 'your_image_dir'})
# google_crawler.crawl(keyword='sunny', max_num=10)
# # google_crawler.crawl(keyword='sunny', max_num=1000, date_min=date(2015, 1, 1), date_max=date(2016, 1, 1))